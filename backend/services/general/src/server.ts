import { app } from "./app";
import config from "./config";

const PORT = config.port || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
