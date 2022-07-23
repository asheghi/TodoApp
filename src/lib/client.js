import getClient from "@neobase/client";
import { getAccountToken as getToken } from "./auth";
const baseurl =
  import.meta.env.VITE_API_BASE_URL || "https://de.neobase.uk/api";
const project = import.meta.env.VITE_PROJECT_NAME || "TodoApp";
export const Client = getClient(project, { baseurl, getToken });
export const Todos = Client.Collection("todos");
export const Auth = Client.Auth;
