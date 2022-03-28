## LINKPICK

## Project overview
___

This project is [Linkpick](https://linkpick.fr/)'s landing page web app.

## Requirements
___

Node.js 12.22.0 or later


## Launch project
___

### Install dependencies

    npm install


### Start dev server

    npm run dev

### Visit browser

    http://localhost:3000


## Techs
____

- [Next JS](https://nextjs.org/) : React framework
- [Material UI](https://mui.com/): UI components library for React

## About Next.JS
___

In Next.js, a page is a React Component exported from a file in the `pages` directory.

The route is based on the file name.

To add a page, simply create a new JS file  in the  `pages` directory and export the component.


## About Material UI
____

Import a component at the beggining of your file to be able to use it:

    import {Button} from '@mui/material/';


Use it in your JSX (in the return of your function):
    
    export default function Home() {
    return (
    <Button href="/test">go to page test</Button>
    )
    }

Look at the [documentation](https://mui.com/components/) to find out about props and examples:

    <Button variant="contained" endIcon={<SendIcon /> size="large"  color="success" }>





    


