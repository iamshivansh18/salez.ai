import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { SiAccusoft } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(1);
  const menuOptions = [
    {
      name: "Dashboard",
      icon: <AiOutlineAppstore />,
      linkId: 1,
      path: "/dashboard",
    },
    {
      name: "Orders",
      icon: <AiOutlineShoppingCart />,
      linkId: 2,
      path: "/orders",
    },
    {
      name: "Products",
      icon: <AiOutlineShopping />,
      linkId: 3,
      path: "/products",
    },
    {
      name: "Overview",
      icon: <AiOutlinePieChart />,
      linkId: 4,
      path: "/overview",
    },
    {
      name: "Customers",
      icon: <AiOutlineUsergroupAdd />,
      linkId: 5,
      path: "/customers",
    },
    {
      name: "Message",
      icon: <AiOutlineMessage />,
      linkId: 6,
      path: "/message",
    },
    {
      name: "Settings",
      icon: <AiOutlineSetting />,
      linkId: 7,
      path: "/settings",
    },
  ];
  return (
    <Section>
      <div className="top">
        <div className="brand">
          <AiFillCodeSandboxCircle />
          <span>Sales.ai</span>
        </div>
        <div className="links">
          <ul>
            {menuOptions.map((menuOption) => {
              return (
                <li
                  className={
                    currentLink === menuOption.linkId ? "active" : "none"
                  }
                >
                  <NavLink to={menuOption.path} key={menuOption.id} onClick={() => setCurrentLink(menuOption.linkId)}>
                    <span>{menuOption.icon}</span>
                    <span className="border">{menuOption.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="map">
        <SiAccusoft />
        <span>
          {" "}
          Major Project <br></br>
          Presentation <strong>CSE 8TH SEM</strong>
        </span>
      </div>
      <div className="logout">
        <a href="#">
          <AiOutlineLogout />
          <span>Logout</span>
        </a>
      </div>
    </Section>
  );
};
export default Sidebar;
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #f8f9ef;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.3rem 0;
      svg {
        color: blue;
        font-size: 2rem;
      }
      span {
        font-size: 1.5rem;
        font-weight: bold;
        color: black;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 2rem;
          border-radius: 0.3rem;
          &:hover {
            background-color: black;
            a {
              color: white;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: grey;
            svg {
              font-size: 1.4rem;
            }
            span {
              display: flex;
              gap: 2rem;
            }
          }
        }
        .active {
          background-color: black;
          a {
            color: white;
          }
        }
      }
    }
  }
  .map {
    width: 90%;
    display: flex;
    background-color: #ebecf1;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: -25px;
    border-radius: 0.5rem;
    svg {
      color: blue;
      font-size: 2rem;
    }
    span {
      align-items: right;
    }
  }
  .logout {
    padding: 0.6rem 3rem;
    margin-left: -2rem;
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: black;
      gap: 1rem;
      svg {
        font-size: 1.4rem;
      }
      span {
        display: flex;
      }
    }
  }
`;
