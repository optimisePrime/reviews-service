import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 200,
  duration: "60s"
};

var product_id = Math.floor(Math.random()*10000000)

export default function() {
  http.get(`http://localhost:3003/reviews/all/${product_id}`);
  sleep(0.1);
};