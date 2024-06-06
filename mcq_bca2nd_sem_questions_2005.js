let questions = [
    {
        numb:1.,
        question:'What is Ceil function?',
        answer:'C.It maps the real number to the smallest following integer',
        options:[
            'A.It maps the real number to the greatest previous integer',
            'B.It maps the real number to the smallest previous integer',
            'C.It maps the real number to the smallest following integer',
            'D.None of the mentioned'
        ]
    },


    {
        numb:2.,
        question:'If a and b are two positive numbers that are less than one, then the maximum value of Floor(a+b) and Ceil(a+b) is?',
        answer:'C.Floor(a+b) is 1 and Ceil(a+b) is 2.',
        options:[
            'A.Floor(a+b) is 0 and Ceil(a+b) is 1.',
            'B.Floor(a+b) is 1 and Ceil(a+b) is 0.',
            'C.Floor(a+b) is 1 and Ceil(a+b) is 2.',
            'D.Floor(a+b) is 2 and Ceil(a+b) is 1.'
        ]
    },


    {
        numb:3.,
        question:'Which of the following is infinite set?',
        answer:'B.Set of points on a line',
        options:[
            'A.Set of days of week',
            'B.Set of points on a line',
            'C.Set of months in a year',
            'D.Set of prime numbers less than 99'
        ]
    },


    {
        numb:4.,
        question:'What is the interval of f(x) = (x-1)(x-2)(x-3)/(x² + 6x² + 11x + 6) where f(x) is positive?',
        answer:'C. (-∞,-3)U (2,-1)U(12) U (3,∞)',
        options:[
            'A. (-0,-3)U(3,∞)',
            'B. (3,-2)U(11)U (2, 3)',
            'C. (-∞,-3)U (2,-1)U(12) U (3,∞)',
            'D. (-∞,∞)'
        ]
    },



    {
        numb:5.,
        question:'Write the set 12,23,34,45,56 in set builder form.',
        answer:'A.{x: x=nn+1 where n is a natural number less than 6}',
        options:[
            'A.{x: x=nn+1 where n is a natural number less than 6}',
            'B.{x: x=n+1n+2 where n is a natural number less than 6}',
            'C.{x: x=n+1n where n is a natural number less than 6}',
            'D.{x: x=nn+1 where n is a natural number less than 5}'
        ]
    },



    {
        numb:6.,
        question:'What is the solution set of the equation X²+3X+2=0 in roster form?',
        answer:'B.{-1,-2}',
        options:[
            'A.{-1,2}',
            'B.{-1,-2}',
            'C.{1,-2}',
            'D.{1, 2}'
        ]
    },


    {
        numb:7.,
        question:'Let M = {5, 6, 7, 8} and N = {3, 4, 9, 10} Which one of the following functions is neither one-one nor onto?',
        answer:'A. f = {(5, 3), (5, 4), (6, 4), (8, 9)}',
        options:[
            'A. f = {(5, 3), (5, 4), (6, 4), (8, 9)}',
            'B. f = {(5, 3), (6, 4), (7, 9), (8, 10)}',
            'C. f = {(5, 4), (5, 9), (6, 3), (7, 10) ,(8,10)}',
            'D. f = {(6, 4), (7, 3), (7, 9), (8, 10)}'
        ]
    },


    {
        numb:8.,
        question:'The inclusion of sets into R={{1, 2} ,{1, 2, 3} ,{1, 2, 5} ,{1, 2, 4}, {1, 2, 3, 4, 5}}is necessary and sufficient to make R a complete lattice under the partial order defined by set containment.',
        answer:'C.{1}',
        options:[
            'A.{1},{2,4}',
            'B.{1},{1,2,3}',
            'C.{1}',
            'D.{1}, {1, 3}, {1, 2, 3, 4} , {1, 2, 3, 5}'
        ]
    },


    {
        numb:9.,
        question:'f(x, y) = sin(xy) + x² In(y). Find fyx at (0,π/2)',
        answer:'D.1',
        options:[
            'A.33',
            'B.0',
            'C.3',
            'D.1'
        ]
    },


    {
        numb:10.,
        question:'f(x, y, z, t) = xy + zt + x²yzt; x = k^3 y = k²; z = k; t=√k . Find df/dt  at k=1',
        answer:'B.16',
        options:[
            'A.34',
            'B.16',
            'C.32',
            'D.61'
        ]
    },


    {
        numb:11.,
        question:'The pair of equations x=a and y=b graphically represents line which are',
        answer:'D.intersecting at (a,b)',
        options:[
            'A.parallel',
            'B.intersecting at (b,a)',
            'C.coincident',
            'D.intersecting at (a,b)'
        ]
    },

    {
        numb:12.,
        question:'What is the plane equation involved in the formula sinθ=a1a+b1b+c1ca₂ +b2+c2/√a1^2 +b1²+c1² ?',
        answer:'C.ax + by + cz+ d = 0',
        options:[
            'A.a1x-b1y + c1z+d₁ = 0',
            'B.a1x^2+ b1y^2 + c₁z² + d₁ = 0',
            'C.ax + by + cz+ d = 0',
            'D. a1x + b1y + c1z + d₁ = 0 and ax + by + cz + d = 0'
        ]
    },


    {
        numb:13.,
        question:'The direction ratios of the normal to the plane 7x + 4y - 2z + 5 = 0 are:',
        answer: 'A.7,4,-2',
        options: [
            'A.7,4,-2',
            'B.7,4,5',
            'C.7,4,2',
            'D.4,-2,5'
        ]
    },


    {
        numb:14.,
        question:'d/dx sin^3 5x is:',
        answer:'A. 15 sin^ 2 (5x) *cos 5x',
        options:[
            'A. 15 sin^ 2 (5x) *cos 5x',
            'B. -3 sin^ 2 5x cos 5x',
            'C. (3sin^2 (5x) * cos 5x) / 5',
            'D. -15sin^2 5x * cos 5x'
        ]
    },



    {
        numb:15.,
        question:'d/dx (e^2x cos2x) is:',
        answer:'A.2e ^ (2x) * [cos 2x - sin 2x]',
        options:[
            'A.2e ^ (2x) * [cos 2x - sin 2x]',
            'B.2e ^ (2x) * [cos 2x + sin 2x] ',
            'C.2e ^ (2x) * [sin 2x - cos 2x]',
            'D.e ^ (2x) * [cos 2x - sin 2x]'
        ]
    },



    {
        numb:16.,
        question:'Express {x: x= n/ (n + 1) , n is a natural number less than 7} in roster form.',
        answer:'C.{1/2, 2/3, 3/4, 4/5, 5/6, 6/7}',
        options:[
            'A.{1/2, 2/3, 4/5, 6/7}',
            'B.{1/2, 2/3, 3/4, 4/5, 5/6, 6/7, 7/8}',
            'C.{1/2, 2/3, 3/4, 4/5, 5/6, 6/7}',
            'D.Infinite set'
        ]
    },



    {
        numb:17.,
        question:'How many binary relations are there on a set S with 9 distinct elements?',
        answer:'C. 281',
        options:[
            'A. 290',
            'B. 2100',
            'C. 281',
            'D. 260'
        ]
    },


    {
        numb:18.,
        question:'Suppose a relation R = {(3, 3), (5, 5), (5, 3),(5, 5), (6,6)} on S = {3, 5, 6}. Here R is known as:',
        answer:'A.equivalence relation',
        options: [
            'A.equivalence relation',
            'B.reflexive relation',
            'C.symmetric relation',
            'D.transitive relation'
        ]
    },


    {
        numb:19.,
        question:'If the longest chain in a partial order is of length I, then the partial order can be written as___ disjoint antichains.',
        answer:'C. l',
        options:[
            'A. l^2',
            'B. l+1',
            'C. l',
            'D. l^1'
        ]
    },



    {
        numb:20.,
        question:'If f:R->R  g(x) = 3x ^ 2 + 7 and f(x)=√x, then gof(x) is equal to:',
        answer:'C. 3x+7',
        options:[
            'A. 3x-7',
            'B. 3x-9',
            'C. 3x+7',
            'D. 3x-8'
        ]
    },
    
]
