import { Router } from "express";

const router = Router();

router.get('healthcheck', (request, response) => {
    return response.status(201).send();
});

export { router };