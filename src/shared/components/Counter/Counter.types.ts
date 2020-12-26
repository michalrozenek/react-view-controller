export interface CounterControllerProps {
  initialCount: number;
}

export interface CounterViewProps {
  count: number,
  increase: () => void;
  decrease: () => void;
}