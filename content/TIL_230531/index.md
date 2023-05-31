---
emoji: 💡
title: TIL: 파이썬 자료구조와 알고리즘 (4)
date: '2023-05-31 22:35:00'
author: logkyung
tags: 블로그
categories: 블로그
---

## 9강. 연결 리스트 (3)
### 연결 리스트가 유용한 경우
연결 리스트의 장점: 삽입과 삭제가 유용하다
따라서 중간 삽입과 삭제가 빈번한 시나리오의 경우 연결리스트 사용이 유리할 수 있다.
하지만 현재의 연결 리스트는 삽입과 삭제 시 position을 앞에서부터 탐색해서 찾아와야 하기 때문에 그다지 유용한 것 같지 않음
이에 대한 해결책으로 새로운 메서드를 만든다
- insertAt(prev, newNode)
- popAfter(prev)
position을 인자로 주는 것이 아니라 한 노드를 넘겨주고 그 뒤에 삽입, 뒤의 노드를 삭제하는 방법으로 변경
하지만 head 노드의 경우 prev 노드가 없는데 어떻게 할 것인가? 하는 문제 발생
이를 위해 head에 dummy node 추가

```
class LinkedList:
    def __init__(self):
        self.nodeCount = 0
        self.head = None
        self.tail = None
        self.head.next = self.tail
```
원소 삽입
  - prev가 가리키는 node의 다음에
  - newNode를 삽입
  - 성공/실패에 따라 True/False 반환
원소 삭제
  - prev의 다음 node 삭제
  - 그 node의 data를 리턴
  - 주의사항
    - prev가 마지막 node일 때: return None
    - 리스트의 마지막 node 삭제할 때: Tail 조정
### 연습문제
제 9 강에서 소개된 추상적 자료구조 LinkedList 는 dummy head node 를 가지는 연결 리스트입니다. 이 클래스의 popAfter(), popAt() 메서드들을, 강의 내용에 소개된 요구조건을 만족시키도록 구현하세요.
이 때, popAt() 메서드의 구현에서는 popAfter() 를 호출하여 이용하도록 합니다.
```
class Node:

    def __init__(self, item):
        self.data = item
        self.next = None


class LinkedList:

    def __init__(self):
        self.nodeCount = 0
        self.head = Node(None)
        self.tail = None
        self.head.next = self.tail


    def traverse(self):
        result = []
        curr = self.head
        while curr.next:
            curr = curr.next
            result.append(curr.data)
        return result


    def getAt(self, pos):
        if pos < 0 or pos > self.nodeCount:
            return None

        i = 0
        curr = self.head
        while i < pos:
            curr = curr.next
            i += 1

        return curr


    def insertAfter(self, prev, newNode):
        newNode.next = prev.next
        if prev.next is None:
            self.tail = newNode
        prev.next = newNode
        self.nodeCount += 1
        return True


    def insertAt(self, pos, newNode):
        if pos < 1 or pos > self.nodeCount + 1:
            return False

        if pos != 1 and pos == self.nodeCount + 1:
            prev = self.tail
        else:
            prev = self.getAt(pos - 1)
        return self.insertAfter(prev, newNode)


    def popAfter(self, prev):
        if prev.next == None:
            return None
        curr = prev.next
        prev.next = curr.next
        if curr.next == None:
            self.tail = prev
        self.nodeCount -= 1
        return curr.data


    def popAt(self, pos):
        if pos < 0 or pos > self.nodeCount:
            raise IndexError
        prev = self.getAt(pos-1)
        return self.popAfter(prev)


def solution(x):
    return 0
```
