import express from 'express';
import { router } from './routes';
import cors from 'cors';

const app = express()

app.use(cors({
    origin:'*'
}))

app.use(express.json())
app.use(router)

app.listen(3030, () => {console.log('[STARTED] Server running on port 3030! ☄️')})