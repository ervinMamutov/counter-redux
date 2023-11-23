import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counter/counterSlice';
import './CounterComponent.css';

const CounterComponent = () => {
  const counter = useSelector((state) => state.counter);
  const despatch = useDispatch();
  const isCounterPositive = counter.value > 0;

  const counterStyle = {
    fontSize: '20px',
    color: counter.value === 0 ? 'blue' : isCounterPositive ? 'green' : 'red',
    fontWeight: 'bold',
  };

  return (
    <div className="box">
      <p className="counter" style={counterStyle}>
        Counter: {counter.value}
      </p>
      <div className="btn-box">
        <button className="decrement" onClick={() => despatch(decrement())}>
          Decrement
        </button>
        <button className="reset" onClick={() => despatch(reset())}>
          Reset
        </button>
        <button className="increment" onClick={() => despatch(increment())}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
