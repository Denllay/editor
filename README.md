## Setup

```npm i```

```npm run dev```


## Features

- [ x ] Add Square: On clicking ‘add square,’ a new square is added to the editor.
- [ x ]  Edit Square: Clicking on a square activates it for editing. Users can change its color, move, resize, and rotate it within a bounded area.
- [ x ] Preview: Clicking on ‘preview’ navigates to a non-editable /preview route, showing all created elements with their properties.

## Known issues

- Bad adaptive
- Bad performance on group resize, drag, rotate
- Slider default props error(it is brought by a third-party library, but there was no time to change it) https://github.com/casesandberg/react-color/issues/894
- Not the best algorithm for changing elements


In this project, I tried to show a high-quality code separation that helps us make changes without wasting a lot of time.

- entities - business entities. **not features**
- featurs - user interactions, actions that bring business value to the user.
- shared - reusable functionality, detached from the specifics of the project/business
