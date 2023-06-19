import {titulo,contenido,posts}from "./vectores.js";

describe("Posts", () => {
  it("deberia devolver una cadena", () => {
    expect(titulo(" ")).toEqual(false);
  });
  it("deberia devolver el titulo", () => {
    expect(titulo("titulo")).toEqual("titulo");
  });
  it("deberia devolver una cadena", () => {
    expect(contenido(" ")).toEqual(false);
  });
  it("deberia devolver el contenido", () => {
    expect(contenido("contenido")).toEqual("contenido");
  });
  it("deberia devolver los posts", () => {
    expect(posts({"titulo":"contenido"})).toEqual({"titulo":"contenido"});
});
it("deberia devolver los posts", () => {
    expect(posts({"titulo":"contenido", "titulo2":"contenido2"})).toEqual({"titulo":"contenido","titulo2":"contenido2"});
});
});