let obj = {
    a: 'f',
    b: 78,
    c: 'R',
    d: {
      a: {
        a: null,
        b: 'E',
        c: {
          a: true,
          b: 'C',
          c: 'test'
        },
        d: 'U'
      },
      b: {
       a: 'R',
       b: ['S', 4, 6, 'I'],
       c: 0,
      },
      c: ['O'],
      d: null,
      e: 'N'
    }
  };

function isUpperCase (letter) {
    if (letter === letter.toUpperCase()) {
        return true
    } else {
        return false
    }
}

function recursionBuildString (name) {
    let answer = '';
    for (let element of Object.values(name)) {
        if (typeof element !== 'object' ) {
            if (typeof element === 'string' && isUpperCase(element) === true) {
                answer += element;
            } else if (Array.isArray(element)) {
                for (let index = 0; index < element.length; index++) {
                    let strain = element[index];
                    if (typeof strain === 'string' && isUpperCase(strain) === true) {
                        answer += strain;
                    }
                }
            }
        } else if (element !== null){
            answer = answer + recursionBuildString(element);
        }
    }
    return answer;
}

console.log(recursionBuildString(obj));