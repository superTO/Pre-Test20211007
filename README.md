# How to run
cd 1
node Fibonacci.js
## environment
tsc Fibonacci.ts -t 'es2020'

## Architecture
  ├── 1/ -- 實作 Fibonacci number (費式數列)
  ├── 2/ -- 使用 Linked List 實作 Stack (需包含以下方法。
  │                             push() : 添加新元素。
  │                             pop():移除元素並返回被移除的元素。
  │                             size():返回所有元素數量。)
  ├── 3/ -- 實作 Data Transformer
  ├── 4/ -- 擇一實作 Debounce 或 Throttle / 
  │          (加分題) 使用 Event Loop 結合實際操作範例擇一敘述 Debounce 或 Throttle 的運作方式
  └── 5/ --  實作 React Custom hook