from ast import List


class MyQueue:
    def __init__(self):
        self.stack1: List[int] = []
        self.stack2: List[int] = []

    def push(self, x: int) -> None:
        self.stack1.append(x)

    def pop(self) -> int:
        self.peek()
        return self.stack2.pop()

    def peek(self) -> int:
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())
        return self.stack2[len(self.stack2) - 1]

    def empty(self) -> bool:
        return not len(self.stack1) and not len(self.stack2)


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
