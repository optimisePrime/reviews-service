import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 100,
  duration: "300s",
  rps: 2000
};

export default function() {
  let product_id;
  let id = Math.floor(Math.random()*9)+1;
  if (id > 7){
    product_id = Math.floor(Math.random()*9999000)+1000;
  } else {
    product_id = Math.floor(Math.random()*999)+1;
  }
  // let product_id = Math.floor(Math.random()*9999000)+1000;
  http.get(`http://localhost:3003/reviews/all/${product_id}`);
};