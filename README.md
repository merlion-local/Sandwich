# Sandwich Configurator

This project is a simple React component that allows users to configure their sandwich by adding different ingredients. The component provides a visual and interactive way to build a sandwich using buttons to add various ingredients like bread, cheese, salami, and salad. Users can also reset the sandwich to start over.
The project was created in Type Script + Vite

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Component Details](#component-details)
  - [State Management](#state-management)
  - [Updating State](#Updating-State)
  - [TSX Structure](#tsx-structure)
- [Styles](#styles)


## Installation

1. **Clone the repository**:
    ```sh
    git clone git@github.com:merlion-local/Sandwich.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd sandwich-configurator
    ```
3. **Install the dependencies**:
    ```sh
    npm install
    ```

## Usage

To run the project locally, use the following command:
```sh
npm run dev

This will start the development server and open the project in your default web browser. You can then interact with the Sandwich Configurator on http://localhost:3000.
```
# Component Details

### State Management

The Sandwich component uses React's useState hook to manage the state of the sandwich configuration. Here’s a detailed explanation of how state management is implemented in this component.

### Initialization

State is initialized with the useState hook. The initial state of sandwich is set to the string "Sandwich configurator: ".

```typescript
import { useState } from "react";

export default function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>("Sandwich configurator: ");
}
```

### Updating State

The state is updated using various functions that append different ingredients to the current sandwich string. Each function calls setSandwich with a new string that includes the added ingredient.

- handleAddBread: Adds bread to the sandwich.
```typescript
function handleAddBread(): void {
  setSandwich(`${sandwich} bread 🍞`);
}
 ```

 - handleAddCheese: Adds cheese to the sandwich.
 ```typescript
 function handleAddCheese(): void {
  setSandwich(`${sandwich} cheese 🧀`);
}
 ```

  - handleAddSalami: Adds salami to the sandwich.
 ```typescript
function handleAddSalami(): void {
  setSandwich(`${sandwich} salami 🍖`);
}
 ```

   - handleAddSalat: Adds salad to the sandwich.
 ```typescript
function handleAddSalat(): void {
  setSandwich(`${sandwich} salad 🥗`);
}
```

   - handlAddClear: Resets the sandwich to its initial state.
 ```typescript
function handlAddClear(): void {
  setSandwich('Sandwich: ');
}
```

## TSX Structure

- Container: A div with the class container that wraps the entire component.
```typescript
<div className={style.container}>
```

- Header: An h2 element for the title.
```typescript
<h2>Sandwich</h2>
```

- Image: An img element to display a sandwich image.
```typescript
<img className={style.sandwich_img} src="image_url" alt="Sandwich Image" />
```

- Description: A p element that displays the current sandwich configuration.
```typescript
<p>{sandwich}</p>
```

- Buttons: Several button elements to add ingredients and reset the sandwich.
```typescript
<button type="button" className={style.btn} onClick={handleAddBread}>
  Add bread 🤌
</button>
<button type="button" className={style.btn} onClick={handleAddCheese}>
  Add cheese 👍
</button>
<button type="button" className={style.btn} onClick={handleAddSalami}>
  Add salami 😌
</button>
<button type="button" className={style.btn} onClick={handleAddSalat}>
  Add salad 😒
</button>
<button type="button" className={style.btn} onClick={handlAddClear}>
  Reset 🥹
</button>
```

## Styles

The styles for the component are defined in the Sandwich.module.css file. The key classes include:

- .container: Styles the main container of the component.
```css
.container{
    background-color: lightgray;
    margin: 30px;
    padding: 40px;
}
```

- .sandwich_img: Styles the image of the sandwich.
```css
.sandwich_img {
    width: 1000px;
    border-radius: 20px;
    box-shadow:rgba(0, 0, 0, 0.25) 0px 54px 55px 0px, rgba(0, 0, 0, 0.12) 0px -12px 30px 0px, rgba(0, 0, 0, 0.12) 0px 4px 6px 0px, rgba(0, 0, 0, 0.17) 0px 12px 13px 0px, rgba(0, 0, 0, 0.09) 0px -3px 5px 0px;
}
```

- .btn: Styles for each button to add ingredients or reset the sandwich.
```css
.btn{
    background-color: lightcyan;
    border: none;
    border-radius: 10px;
    padding: 20px;
}

.btn:hover{
    transform: scale(1.2);
    transition:  1s;
}
```

- This is a second-level heading and without it everything would not be beautiful!
```css
h2{
    text-align: center;
    color: black;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
```
## Feel free to contribute to this project by opening issues or submitting pull requests. Enjoy building your custom sandwiches! 🍞🧀🍖🥗















