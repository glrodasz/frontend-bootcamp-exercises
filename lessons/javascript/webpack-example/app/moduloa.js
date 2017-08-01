function print(data) {
  console.log(data)
}

export function saludarEnEspanol() {
  print('Hola');
}

export function saludarEnIngles() {
  print('Hello');
}

export const a = 5;

export default function() {
  print('default');
}
