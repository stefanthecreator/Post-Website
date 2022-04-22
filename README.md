# Post Website Documentation

React JS application with Bootstrap 4.6 | Coding Challenge - Stefan Stoilkovski

## Tools used for programming (and reasoning)

- **Framework/ library**: ReactJS (JSX)
  - High performance (Virtual DOM) therefore a better UX
  - Component Style Architecture: Seperate reusable components that work together and are easy to maintain and scale
  - Easy transition to React Native for mobile apps
  - Strong community
- **Styling**: Bootstrap v4.6 and CSS in App.css
  - Bootstrap is fast for creating beautiful UI and layout syling
  - Small ajustments in App.css (same place for everything because small project)
- **Icons**: FontAwesome
- **Unique ID**: uuid v4
- **Browser and debugging**: Google Chrome and Plug-in React Developer Tools
- **Package manager**: npm
- **Code Editor**: Visual Studio Code

## Problems and solutions

- There is a dynamic custom message in the **PostForm.jsx** that displays when the user starts writing.
  Sometimes the message will change too late when the function is written in onChange handle function when title or post text
  are too short ( Title at least 4 and text at least 10 characters). In order to solve that problem and also combine
  and put the logic in one place, I used a useEffect when title or text is changed.

```
    useEffect(() => {
        if (title === "" && text === "") {
        setBtnDisabled(true);
        setMessage(null);
        } else if (title.trim().length >= 4 && text.trim().length >= 10) {
        setMessage(null);
        setBtnDisabled(false);
        } else if (title.trim().length < 4 && text.trim().length < 10) {
        setMessage(
            "Title must be at least 4 characters and post text must be at least 10 characters"
        );
        setBtnDisabled(true);
        } else if (
        title.trim().length < 4 &&
        (text === "" || text.trim().length >= 10)
        ) {
        setMessage("Title must be at least 4 characters");
        setBtnDisabled(true);
        } else if (
        text.trim().length < 10 &&
        (title === "" || title.trim().length >= 4)
        ) {
        setMessage("Post text must be at least 10 characters");
        setBtnDisabled(true);
        } else {
        setMessage(
            "Title must be at least 4 characters and post text must be at least 10 characters"
        );
        setBtnDisabled(true);
        }
    }, [title, text]);
```

- If you want to return/map more objects in return(), you have to wrap the objects within a div or Fragment <></>.\
  Also when you map a list of objects, every object need a unique key in order for the VirtualDOM to differentiate
  the elements and to know which elements to modify/delete.

- Since I use Bootstrap for this project, for the expandable fields I used and modified the accordion from Bootstrap.
  You can find the documentation [here](https://getbootstrap.com/docs/4.6/components/collapse/#accordion-example).
  The collapse plugin utilizes a few classes to handle the heavy lifting:

  - .collapse hides the content
  - .collapse.show shows the content
  - .collapsing is added when the transition starts, and removed when it finishes

  There are also many ways to build build expandable fields by scratch.\
  **First**, you need styling for the button/title maybe bold, bigger font size etc.\
  **Secound**, you need a two different classes for the field that sould be expandable

  - default styling (collapsed) with transition for closing
  - expanded field style where the content of post is shown with a transition for opening

  ```
    .content{
        max-height:0;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(0,1,0,1);
    }

    •content.show {
        height: auto;
        max-height: 9999px;
        transition: all 0.5s cubic-bezier(1,0,1,0);
    }
  ```

  **Last but not least**, we add an onClick function to the button/title and when we click on the title we change the state to show and that state changes the className of the field and adds show. The field rerenders and the field opens. If the state of that field/index is already show == true, then we set the show to null and the default style colapses the content.

  For the reason that this is a small project I don't use useContext() but prop drilling to access the data from different components. There is also no need of pagination, becuase there are no other components at the bottom of the page and when you search a title, after entering one word there are just few results so it defeats the purpose of the pagination.
