import React from "react";
import { useSelector } from "react-redux";
import { SideBar } from "./SideBar";
import { PageLoading } from './../components';

export const AdminLayout = (props) => {
  const isLoading = useSelector((state) => state.page.isLoading);
  const header = props.header;
  return (<>
  <PageLoading isLoading={isLoading}/>
    <div className="page-wrapper chiller-theme toggled">
      <SideBar />
      <main className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="form-group col-md-12">
              {/* Heading */}
              <h2>{header}</h2>
              <hr />
              {/* Heading */}
              {props.children}
              <hr />
            </div>
          </div>
          <footer className="text-center">
            <div className="mb-2">
              <small>
                © 2020 made with{" "}
                <i className="fa fa-heart" style={{ color: "red" }} /> by -{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://azouaoui.netlify.com"
                >
                  Mohamed Azouaoui
                </a>
              </small>
            </div>
            <div>
              <a href="https://github.com/azouaoui-med" target="_blank">
                <img
                  alt="GitHub followers"
                  src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social"
                />
              </a>
              <a href="https://twitter.com/azouaoui_med" target="_blank">
                <img
                  alt="Twitter Follow"
                  src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social"
                />
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
    </>
  );
};
