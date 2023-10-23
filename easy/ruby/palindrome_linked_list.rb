# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {Boolean}
def is_palindrome(head)
  slow = head
  fast = head
  while fast&.next
    slow = slow.next
    fast = fast.next.next
  end

  prev = nil
  while slow
    temp = slow.next
    slow.next = prev
    prev = slow
    slow = temp
  end

  left = head
  right = prev
  while left && right
    return false if left.val != right.val

    left = left.next
    right = right.next
  end

  true
end
