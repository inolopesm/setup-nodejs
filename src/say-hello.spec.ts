const { sayHello } = require("./say-hello")

describe("sayHello", () => {
  it("should say \"Hello World!\" if name is undefined", () => {
    const result = sayHello()
    expect(result).toBe('Hello World!')
  })

  it("should say \"Hello Matheus!\" if name is \"Matheus\"", () => {
    const result = sayHello("Matheus")
    expect(result).toBe("Hello Matheus!")
  })
})
