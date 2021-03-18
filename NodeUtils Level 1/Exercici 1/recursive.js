

const myFunc = () => {
    console.log('Its ben 2 secs, execute again!!' );
    setTimeout(myFunc, 2000);
}

setTimeout(myFunc, 2000);


