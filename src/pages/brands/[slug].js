import React from "react";
import WPAPI from "wpapi";
import config from "../../config";
import Brand from "../../components/brands/brandsDetail";
import FirstChilds from "../../components/brands/firstChilds";

const wp = new WPAPI({ endpoint: config.apiUrl });

const BrandDetail = ({
  post,
  childCats,
  cat,
  childCats_child,
  childCats_child_childs,
}) => {
  return (
    <div className="relative top">
      <Brand post={post} />
      <FirstChilds
        post={post}
        cat={cat}
        childCats={childCats}
        childCats_child={childCats_child}
        childCats_child_childs={childCats_child_childs}
      />
    </div>
  );
};

export async function getStaticProps({ params = {} } = {}) {
  const detail = params.slug;

  const post = await wp
    .posts()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const cat = await wp
    .categories()
    .slug(`${detail}`)
    .embed()
    .then((data) => data[0]);

  const childCats = await wp
    .categories()
    .parent((cat || {}).id)
    .embed();

  const childCats_child = await Promise.all(
    childCats.map(async (el) => {
      return await wp.categories().parent(el.id).embed();
    })
  );

  const childCats_child_childs = await Promise.all(
    childCats_child.map(async (el) => {
      return await Promise.all(
        el.map(async (el) => {
          return await wp.categories().parent(el.id).embed();
        })
      );
    })
  );

  return {
    props: { post, cat, childCats, childCats_child, childCats_child_childs },
  };
}

export async function getStaticPaths() {
  const catId = await wp
    .categories()
    .slug(`brands`)
    .embed()
    .then((data) => data[0]);

  const posts = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(40)
    .embed();

  return {
    paths: posts.map((post) => `/brands/${post.slug}`) || [],
    fallback: false,
  };
}

export default BrandDetail;
