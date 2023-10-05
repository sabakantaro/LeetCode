class MyQueue
  def initialize
    @stack1 = []
    @stack2 = []
  end

  #   :type x: Integer
  #   :rtype: Void
  def push(x)
    @stack1.push(x)
  end

  #   :rtype: Integer
  def pop
    move_elements if @stack2.empty?
    @stack2.pop
  end

  #   :rtype: Integer
  def peek
    move_elements if @stack2.empty?
    @stack2.last
  end

  #   :rtype: Boolean
  def empty
    @stack1.empty? && @stack2.empty?
  end

  private

  def move_elements
    @stack2.push(@stack1.pop) while @stack1.any?
  end
end

# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue.new()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
