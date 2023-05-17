/* eslint-disable */
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { IRoutesItem } from "components/Dashboard/Layout/routes";
import Tooltip from "components/Common/Tooltip";

export const SidebarLinks = ({ routes }: { routes: IRoutesItem[] }): JSX.Element => {
  const { pathname } = useRouter();
  const activeRoute = (routeName: string) => {
    return routeName
      ? pathname.includes(routeName)
      : pathname.endsWith("dashboard");
  };

  const createLinks = (routes: IRoutesItem[]) => {
    return routes.map((route, index) => {
      const path = route.path;

      return (
        <Link key={index} href={route.disabled ? '' : `/dashboard${route.path}`}>
          <div className="relative mb-3 flex hover:cursor-pointer w-80">
            <li
              className={`my-1 mx-8 rounded-md py-3 w-full ${activeRoute(path) ? "bg-secondary" : ""}`}
              key={index}
            >
              {route.disabled
                ? <Tooltip>
                  <div className={"flex ml-4 cursor-no-drop items-center"}>
                    <span
                      className={`${
                        activeRoute(path)
                          ? "font-bold text-white"
                          : "font-medium text-gray-600"
                      }`}
                    >
                      {route.icon}{" "}
                    </span>
                    <p
                      className={`text-base leading-1 ml-4 flex ${
                        activeRoute(path)
                          ? "font-bold text-white"
                          : "font-medium text-gray-600"
                      }`}
                    >
                      {route.name}
                    </p>
                    {route.notifications
                      ? <div
                        className={"relative left-2 bottom-2 rounded-full bg-secondary w-6 h-6 flex justify-center items-center"}>
                        <p>{route.notifications}</p>
                      </div>
                      : <></>
                    }
                  </div>
                </Tooltip>
                : <div className={"flex ml-4 cursor-pointer items-center"}>
                    <span
                      className={`${
                        activeRoute(path)
                          ? "font-bold text-white"
                          : "font-medium text-gray-600"
                      }`}
                    >
                      {route.icon}{" "}
                    </span>
                    <p
                      className={`text-base leading-1 ml-4 flex ${
                        activeRoute(path)
                          ? "font-bold text-white"
                          : "font-medium text-gray-600"
                      }`}
                    >
                      {route.name}
                    </p>
                    {route.notifications
                      ? <div
                        className={"relative left-2 bottom-2 rounded-full bg-secondary w-6 h-6 flex justify-center items-center"}>
                        <p>{route.notifications}</p>
                      </div>
                      : <></>
                    }
                </div>
              }
            </li>
          </div>
        </Link>
      );
    });
  };

  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
