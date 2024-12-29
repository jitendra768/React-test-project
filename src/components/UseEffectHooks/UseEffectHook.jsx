/* If we don't provide a dependency array, the effect will run on every re-render */
useEffect(() => {
  console.log("Effect running on every re-render");
});

/* If we provide an empty dependency array, the effect will run only on the mount phase */
useEffect(() => {
  console.log("Effect running only on mount phase");
}, []);

/* If we provide a dependency array with some variables, the effect will run on re-render if their value is updated */
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Effect running on re-render if count is updated");
}, [count]);
