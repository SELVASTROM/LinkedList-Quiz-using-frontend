const quizData = [
  {
    question: "What is the default size of a LinkedList?",
    a: "0",
    b: "1",
    c: "10",
    d: "Depends on data",
    correct: "a"
  },
  {
    question: "Which method adds element at the start?",
    a: "add()",
    b: "addLast()",
    c: "addFirst()",
    d: "push()",
    correct: "c"
  },
  {
    question: "Which method removes duplicates?",
    a: "removeAll()",
    b: "distinct()",
    c: "manual iteration",
    d: "removeDuplicates()",
    correct: "c"
  },
  {
    question: "LinkedList is a type of?",
    a: "Queue",
    b: "Stack",
    c: "List",
    d: "All of the above",
    correct: "d"
  },
  {
    question: "Which data structure is used by Java LinkedList?",
    a: "Array",
    b: "HashMap",
    c: "Doubly Linked List",
    d: "Tree",
    correct: "c"
  },
  {
    question: "What method is used to add an element at the end of a LinkedList?",
    a: "addLast()",
    b: "append()",
    c: "addEnd()",
    d: "insert()",
    correct: "a"
  },
  {
    question: "Which method removes all elements from the LinkedList?",
    a: "deleteAll()",
    b: "clear()",
    c: "remove()",
    d: "reset()",
    correct: "b"
  },
  {
    question: "How to access the first element in a LinkedList?",
    a: "getFirst()",
    b: "peek()",
    c: "element()",
    d: "get(0)",
    correct: "a"
  },
  {
    question: "Which interface does LinkedList implement directly?",
    a: "Map",
    b: "Set",
    c: "List",
    d: "Collection",
    correct: "c"
  },
  {
    question: "Which of the following allows both insertion and deletion from both ends in LinkedList?",
    a: "List",
    b: "Queue",
    c: "Stack",
    d: "Deque",
    correct: "d"
  },
  {
    question: "What will linkedList.removeFirst() do?",
    a: "Remove last element",
    b: "Remove first element",
    c: "Remove all elements",
    d: "Nothing",
    correct: "b"
  },
  {
    question: "What is the time complexity of adding at the end of LinkedList?",
    a: "O(1)",
    b: "O(n)",
    c: "O(log n)",
    d: "O(n log n)",
    correct: "a"
  },
  {
    question: "Which method is used to remove all elements in LinkedList?",
    a: "delete()",
    b: "removeAll()",
    c: "clear()",
    d: "empty()",
    correct: "c"
  },
  {
    question: "What is the return type of getFirst() method in Java LinkedList?",
    a: "int",
    b: "boolean",
    c: "Object",
    d: "String",
    correct: "c"
  }


];

const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");

function loadQuiz() {
  quizData.forEach((q, idx) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `
      <p>${idx + 1}. ${q.question}</p>
      <label><input type="radio" name="q${idx}" value="a" /> ${q.a}</label><br/>
      <label><input type="radio" name="q${idx}" value="b" /> ${q.b}</label><br/>
      <label><input type="radio" name="q${idx}" value="c" /> ${q.c}</label><br/>
      <label><input type="radio" name="q${idx}" value="d" /> ${q.d}</label><br/>
    `;
    quiz.appendChild(div);
  });
}

loadQuiz();

submitBtn.addEventListener("click", () => {
  let score = 0;
  quizData.forEach((q, i) => {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer && answer.value === q.correct) {
      score++;
    }
  });

  result.innerHTML = `<h3>Your score: ${score}/${quizData.length}</h3>`;
});
