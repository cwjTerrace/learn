import { Button, InputNumber } from "antd";
import { useState } from "react";

const CommissionCalculator = () => {
  const [profit, setProfit] = useState<number>();
  const [commission, setCommission] = useState<number>();

  const calculateCommission = () => {
    let baseCommission = 0;
    let tmpProfit = profit || 0;

    if (tmpProfit < 36000) {
      baseCommission = tmpProfit * 0.1;
    } else if (tmpProfit >= 36000 && tmpProfit < 120000) {
      baseCommission = 3600 + (tmpProfit - 36000) * 0.15;
    } else if (tmpProfit >= 120000) {
      baseCommission = 16200 + (tmpProfit - 120000) * 0.25;
    }

    setCommission(baseCommission);
  };

  return (
    <div>
      <h2>提成计算器</h2>
      <label>利润: </label>
      <InputNumber style={{ width: 300 }} value={profit} onChange={(e) => setProfit(e || 0)} />
      <Button onClick={calculateCommission}>计算</Button>
      <p>提成: {commission}</p>
    </div>
  );
};

export default CommissionCalculator;
