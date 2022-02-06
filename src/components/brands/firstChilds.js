import React, { useState } from "react";
import { getData, __ } from "../../utils";
import { DownloadOutlined } from "@ant-design/icons";

function handleScroll() {
  window.scroll({
    top: document.documentElement.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
}

const FirstChilds = ({
  post,
  cat,
  childCats,
  childCats_child,
  childCats_child_childs,
}) => {
  const { title } = post || {};
  const { acf } = cat || {};
  const { pdf_file } = acf || {};

  const [firstID, setFirstID] = useState(0);
  const [firstName, setFirstName] = useState();

  const [secondID, setSecondID] = useState(0);
  const [secondName, setSecondName] = useState();

  const secondChild = (ID, Name) => {
    return (
      <div className="brand-details">
        <div className="blue-title">
          {Name} {__("Products")}
        </div>
        {childCats_child_childs.map((el, ind) => {
          if (el.length === 0) {
            return null;
          }

          return (
            <div key={ind}>
              {el.map((parent, ind) => {
                if (parent.length > 0 && parent[0].parent !== ID) {
                  return null;
                }

                return (
                  <div className="brochures" key={ind}>
                    {parent.map((item, ind) => {
                      const { acf, name, id } = item || {};
                      const { bg_image, pdf_file } = acf || {};

                      return (
                        <div
                          key={ind}
                          className="one-brochure"
                          style={{
                            backgroundImage: `url(${bg_image})`,
                          }}
                        >
                          <div
                            className="broch-overlay"
                            style={{
                              opacity: bg_image ? "0.6" : "1",
                            }}
                          />
                          <p>{name}</p>
                          {pdf_file && (
                            <a
                              className="download"
                              href={pdf_file}
                              target="_blank"
                              download
                            >
                              {__("Download")} <DownloadOutlined />
                            </a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  const firstChild = (ID, Name) => {
    return (
      <div className="brand-details">
        <div className="blue-title">
          {Name} {__("Products")}
        </div>
        {childCats_child.map((parent, ind) => {
          if (parent.length > 0 && parent[0].parent !== ID) {
            return null;
          }
          return (
            <div className="brochures" key={ind}>
              {parent.map((item, ind) => {
                const { acf, name, id } = item || {};
                const { bg_image, pdf_file } = acf || {};

                return (
                  <div
                    key={ind}
                    className="one-brochure"
                    style={{
                      backgroundImage: `url(${bg_image})`,
                    }}
                    onClick={() => {
                      setSecondID(id);
                      setSecondName(name);
                      handleScroll();
                    }}
                  >
                    <div
                      className="broch-overlay"
                      style={{
                        opacity: bg_image ? "0.6" : "1",
                      }}
                    />
                    <p>{name}</p>
                    {pdf_file && (
                      <a
                        className="download"
                        href={pdf_file}
                        target="_blank"
                        download
                      >
                        {__("Download")} <DownloadOutlined />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {childCats.length > 0 ? (
        <div className="brand-details">
          <div className="blue-title">
            {(title || {}).rendered} {__("Products")}
            {pdf_file && (
              <a className="download" href={pdf_file} target="_blank" download>
                <DownloadOutlined />
                <span className="tooltip">{__("Download brochure")}</span>
              </a>
            )}
          </div>

          <div className="brochures">
            {childCats.map((item, ind) => {
              const { acf, name, id } = item || {};
              const { bg_image, pdf_file } = acf || {};

              return (
                <div
                  key={ind}
                  className="one-brochure"
                  style={{
                    backgroundImage: `url(${bg_image})`,
                  }}
                  onClick={() => {
                    setFirstID(id);
                    setFirstName(name);
                    setSecondID(0);
                    handleScroll();
                  }}
                >
                  <div
                    className="broch-overlay"
                    style={{
                      opacity: bg_image ? "0.6" : "1",
                    }}
                  />
                  <p>{name}</p>
                  {pdf_file && (
                    <a
                      className="download"
                      href={pdf_file}
                      target="_blank"
                      download
                    >
                      {__("Download")} <DownloadOutlined />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      {firstID !== 0 ? firstChild(firstID, firstName) : null}
      {secondID !== 0 ? secondChild(secondID, secondName) : null}
    </>
  );
};

export default FirstChilds;
