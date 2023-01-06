import React from "react";
// import { Provider } from "react-redux";
import Header from "../Components/header";
import { Layout } from "antd";
import AppSidebar from "../components/AppSidebar";

// const Header = Layout;

const HocComponent = (MyComponent) => {
  class NewComponent extends React.Component {
    state = { isActive: false };

    handleToggle = () => {
      this.setState({ isActive: !this.state.isActive });
      console.log(this.state);
      // dispatch(setToggle(res));
    };

    componentDidMount() {
      console.log(this.props);
    }

    render() {
      const isActive = this.state.isActive;

      return (
        <>
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <AppSidebar data={this.state.isActive} />
            <Layout style={{ display: "flex", flexDirection: "column" }}>
              <div
                className="w-full align-component"
                style={{
                  paddingLeft: isActive ? "120px" : "320px",
                  transition: "all ease 0.5s",
                }}
              >
                <button
                  onClick={this.handleToggle}
                  className="toggle-btn"
                  style={{
                    marginLeft: isActive ? "103px" : "303px",
                    transition: "all ease 0.5s",
                  }}
                >
                  {isActive ? (
                    <i
                      class="fa fa-chevron-right"
                      aria-hidden="true"
                      style={{ transition: "all ease 0.5s" }}
                    ></i>
                  ) : (
                    <i
                      class="fa fa-chevron-left"
                      aria-hidden="true"
                      style={{ transition: "all ease 0.5s" }}
                    ></i>
                  )}
                </button>
                {/* <Header /> */}
                <MyComponent {...this.props} />
              </div>
            </Layout>
          </Layout>
        </>
      );
    }
  }
  return NewComponent;
};

export default HocComponent;
