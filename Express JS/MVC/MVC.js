import experss from "express";

import handleUsers from "./controllers/userController.js";

const app = experss();

app.set('view engine','ejs')
app.get('/user',handleUsers)

app.listen(7500)