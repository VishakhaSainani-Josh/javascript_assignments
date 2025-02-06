/*5. Can you use return instead of break in loops?  */

for (let i = 0; i < 5; i++) {
    console.log(i)
    if (i > 2) {
        return;
    }
}

//Yes we can