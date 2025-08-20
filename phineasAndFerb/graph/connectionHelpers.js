import { Connection } from "../classes/connection.js";

export const groupConnections = (from, to, level) => {
  return from.flatMap(f => to.map(t => new Connection(f,t,level)));
}

export const connectAll = (people, level) => {
  const edges = [];
  for (let i = 0; i < people.length; i++) {
    for (let j = i + 1; j < people.length; j++) {
      edges.push(new Connection(people[i], people[j], level));
    }
  }
  return edges;
}