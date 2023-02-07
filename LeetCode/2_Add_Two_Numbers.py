# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        total = []
        final_total = 0
        answer = ListNode(0)
        pointer = answer


        while l1 or l2:
            total.append((l1.val if l1 else 0) + (l2.val if l2 else 0))
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        for i in range(len(total)):
            final_total += total[i] * (10 ** i)

        string_total = str(final_total)


        for i in reversed(range(len(string_total))):
            pointer.next = ListNode(int(string_total[i]))
            pointer = pointer.next
        
        return answer.next
        
            