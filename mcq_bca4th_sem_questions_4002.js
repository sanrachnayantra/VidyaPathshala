let questions = [
    {
        numb: 1.,
        question: 'A primary key, if combined with a foreign key creates',
        answer: 'C. Parent child relationship',
        options: [
            'A. Many to many relationship',
            'B. Network model',
            'C. Parent child relationship',
            'D. None of these'
        ]
    },
    {
        numb: 2.,
        question: 'Which abstraction level of the database system describes how the data is actually stored?',
        answer: 'B. Physical level',
        options: [
            'A. Logical level',
            'B. Physical level',
            'C. View level',
            'D. None of the above'
        ]
    },
    {
        numb: 3.,
        question: 'In Hierarchical model a record type that does not participate as parent record type in any PCR type is called',
        answer: 'A. Leaf of the Hierarchical schema',
        options: [
            'A. Leaf of the Hierarchical schema',
            'B. Root of the Hierarchical schema',
            'C. Parent record set',
            'D. Child record set'
        ]
    },
    {
        numb: 4.,
        question: 'The __________ condition allows a general predicate over the relations being joined.',
        answer: 'D. On',
        options: [
            'A. Using',
            'B. Set',
            'C. Where',
            'D. On'
        ]
    },
    {
        numb: 5.,
        question: 'Which of the following is used to provide delete authorization to instructor?',
        answer: 'C. CREATE ROLE instructor GRANT DELETE ON takes TO instructor;',
        options: [
            'A. CREATE ROLE instructor GRANT DELETE TO instructor;',
            'B. CREATE ROLE instructor GRANT SELECT ON takes TO instructor;',
            'C. CREATE ROLE instructor GRANT DELETE ON takes TO instructor;',
            'D. All of the mentioned'
        ]
    },
    {
        numb: 6.,
        question: 'Third normal form is based on the concept of ___________',
        answer: 'B. Transitive Dependency',
        options: [
            'A. Closure Dependency',
            'B. Transitive Dependency',
            'C. Normal Dependency',
            'D. Functional Dependency'
        ]
    },
    {
        numb: 7.,
        question: 'Consider a relation R(A,B,C,D,E,F,G) and the following FDs:{AB->CD,AF->F,DE->F,C->G,F->E,G->A}. Find out {C,F}+:',
        answer: 'D. {C,F,G,E,A,D}',
        options: [
            'A. {C,F}',
            'B. {C,F,G,E,A}',
            'C. {C,F,E,A}',
            'D. {C,F,G,E,A,D}'
        ]
    },
    {
        numb: 8.,
        question: 'Which is the bottom-up approach to database design that design by examining the relationship between attributes:',
        answer: 'C. Normalization',
        options: [
            'A. Functional dependency',
            'B. Database modeling',
            'C. Normalization',
            'D. Decomposition'
        ]
    },
    {
        numb: 9.,
        question: 'Which of the following is not true about BCNF?',
        answer: 'B. It is much stronger than BCNF',
        options: [
            'A. In 3NF there should be no transitive dependency',
            'B. It is much stronger than BCNF',
            'C. In 3NF the functional dependencies are already in 1NF and 2NF.',
            'D. In 3NF there is preservation of all functional dependencies.'
        ]
    },
    {
        numb: 10.,
        question: '__________ means that the data used during the execution of the transaction cannot be used by a second transaction until the first one is completed.',
        answer: 'C. Isolation',
        options: [
            'A. Serializability',
            'B. Atomicity',
            'C. Isolation',
            'D. Time stamping'
        ]
    },
    {
        numb: 11.,
        question: 'DBMS periodically suspends all processing and synchronizes its files and journals through the use of',
        answer: 'A. Checkpoint facility',
        options: [
            'A. Checkpoint facility',
            'B. Backup facility',
            'C. Recovery manager',
            'D. Database change log'
        ]
    },
    {
        numb: 12.,
        question: 'The deadlock in a set of a transaction can be determined by',
        answer: 'A. Read-only graph',
        options: [
            'A. Read-only graph',
            'B. Wait graph',
            'C. Wait-for graph',
            'D. All of the mentioned'
        ]
    },
    {
        numb: 13.,
        question: 'A sophisticated locking mechanism known as 2-phase locking which includes Growing phase and _____________',
        answer: 'A. Shrinking Phase',
        options: [
            'A. Shrinking Phase',
            'B. Release Phase',
            'C. Commit Phase',
            'D. Acquire phase'
        ]
    },
    {
        numb: 14.,
        question: 'In E-R Diagram relationship type is presented by',
        answer: 'D. Triangle',
        options: [
            'A. Ellipse',
            'B. Dashed ellipse',
            'C. Rectangle',
            'D. Triangle'
        ]
    },
    {
        numb: 15.,
        question: 'If databse modifications occur while the transaction is still active, the transaction is said to use the __________ technique.',
        answer: 'C. Immediate-modification',
        options: [
            'A. Deferred-modification',
            'B. Late-modification',
            'C. Immediate-modification',
            'D. Undo'
        ]
    },
    {
        numb: 16.,
        question: 'In a large DBMS',
        answer: 'C. each user "see" omly a small part of the entire database',
        options: [
            'A. each user can access every sub schema',
            'B. each sub schema contains every field in the logical schema',
            'C. each user "see" omly a small part of the entire database',
            'D. all of these'
        ]
    },
    {
        numb: 17.,
        question: '__________ is critical in formulating database design.',
        answer: 'C. Functional dependency',
        options: [
            'A. Row-column order',
            'B. Number of tables',
            'C. Functional dependency',
            'D. None of the choices offered'
        ]
    },
    {
        numb: 18.,
        question: 'Which of the following relational algebra operations do not require the participating tables to be union-compatible?',
        answer: 'D. Join',
        options: [
            'A. Union',
            'B. Intersection',
            'C. Difference',
            'D. Join'
        ]
    },
    {
        numb: 19.,
        question: 'Which of the following is used to denote the selection opertion in relational algebra?',
        answer: 'B. Sigma(Greek)',
        options: [
            'A. Pi(Greek)',
            'B. Sigma(Greek)',
            'C. Lambda(Greek)',
            'D. Omega(Greek)'
        ]
    },
    {
        numb: 20.,
        question: '__________ provides option for entering SQL queries as execution time, rather than at the development stage.',
        answer: 'D. Dynamic SQL',
        options: [
            'A. PL/SQL',
            'B. SQL*Plus',
            'C. SQL',
            'D. Dynamic SQL'
        ]
    },


]
