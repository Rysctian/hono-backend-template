import usersRoutes from "../controllers/users/routes.js"

export const routes = [usersRoutes] as const;

export type AppRoutes = (typeof routes)[number];
