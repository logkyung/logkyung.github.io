---
emoji: 💡
title: TIL: 파이썬 자료구조와 알고리즘 (3)
date: '2023-05-28 22:55:00'
author: logkyung
tags: 블로그
categories: 블로그
---

## 6강. 알고리즘 복잡도(Complexity)
### 시간 복잡도
문제 크기와 해결 시간 사이의 관계
### 공간 복잡도
문제 크기와 필요한 메모리 공간 사이 관계
### Big-O Notation
알고리즘 복잡도를 표현할 때 쓰이는 점근 표기법 중 하나
예를 들어, 입력의 크기가 n일 때
- O(log n): 입력의 크기의 로그에 비례하는 시간 소요
- O(n): 입력 크기에 비례하는 시간 소요
### 선형 시간 알고리즘: O(n)
무작위 배열에서 최댓값을 찾는 문제에 해당
끝까지 살펴보기 전에는 알 수 없다
- Average Case: O(n)
- Worst Case: O(n)
### 로그 시간 알고리즘: O(log n)
크기순으로 정렬된 배열에서 이진 탐색하는 문제
### 이차 시간 알고리즘
삽입 정렬과 같은 문제
### 보다 낮은 복잡도를 가지는 정렬 알고리즘
병합 정렬(merge sort)의 경우 O(nlogn)
정렬 문제에 대해 O(nlogn)보다 낮은 복잡도를 갖는 알고리즘은 없다.
<br>
## 7강. 연결 리스트 (Linked List) (1)
### 연습문제
추상적 자료구조로 LinkedList 라는 이름의 클래스가 정의되어 있다고 가정하고, 이 리스트를 처음부터 끝까지 순회하는 메서드 traverse() 를 완성하세요.

메서드 traverse() 는 리스트를 리턴하되, 이 리스트에는 연결 리스트의 노드들에 들어 있는 데이터 아이템들을 연결 리스트에서의 순서와 같도록 포함합니다. 예를 들어, LinkedList L 에 들어 있는 노드들이 43 -> 85 -> 62 라면, 올바른 리턴 값은 [43, 85, 62] 입니다.

이 규칙을 적용하면, 빈 연결 리스트에 대한 순회 결과로 traverse() 메서드가 리턴해야 할 올바른 결과는 [] 입니다.

```
class Node:
    def __init__(self, item):
        self.data = item
        self.next = None

class LinkedList:
    def __init__(self):
        self.nodeCount = 0
        self.head = None
        self.tail = None

    def getAt(self, pos):
        if pos < 1 or pos > self.nodeCount:
            return None
        i = 1
        curr = self.head
        while i < pos:
            curr = curr.next
            i += 1
        return curr

    def traverse(self):
        answer = []
        curr = self.head
        while curr:
            answer.append(curr.data)
            curr = curr.next
        return answer
```

<br>
## 8강. 연결 리스트 (Linked List) (2)
### 연습문제
추상적 자료구조 LinkedList 클래스의 메서드로서 popAt() 메서드를 강의 내용에 소개된 요구조건을 만족시키도록 구현하세요.

초기 코드로 들어 있는 것은 solution() 함수를 포함하여 다른 부분은 수정하지 말고, def popAt(self, pos): 의 메서드 몸체만 구현하세요.

만약, 인자로 주어진 pos 가 올바른 범위의 값을 가지지 않는 경우에는 IndexError exception 을 발생시키도록 합니다. 이렇게 하기 위한 코드는 raise IndexError 입니다.

```
class Node:

    def __init__(self, item):
        self.data = item
        self.next = None


class LinkedList:

    def __init__(self):
        self.nodeCount = 0
        self.head = None
        self.tail = None


    def getAt(self, pos):
        if pos < 1 or pos > self.nodeCount:
            return None

        i = 1
        curr = self.head
        while i < pos:
            curr = curr.next
            i += 1

        return curr


    def insertAt(self, pos, newNode):
        if pos < 1 or pos > self.nodeCount + 1:
            return False

        if pos == 1:
            newNode.next = self.head
            self.head = newNode

        else:
            if pos == self.nodeCount + 1:
                prev = self.tail
            else:
                prev = self.getAt(pos - 1)
            newNode.next = prev.next
            prev.next = newNode

        if pos == self.nodeCount + 1:
            self.tail = newNode

        self.nodeCount += 1
        return True


    def popAt(self, pos):
        if pos < 1 or pos > self.nodeCount or self.nodeCount == 0:
            raise IndexError

        if self.nodeCount == 1:     # 유일노드의 경우
            curr = self.head
            self.head = None
            self.tail = None
            self.nodeCount = 0
            return curr.data
        else:
            if pos == 1:
                curr = self.head
                self.head = curr.next
            else:
                prev = self.getAt(pos-1)
                curr = prev.next
                prev.next = curr.next
                if pos == self.nodeCount:
                    self.tail = prev
            self.nodeCount -= 1
            return curr.data



    def traverse(self):
        result = []
        curr = self.head
        while curr is not None:
            result.append(curr.data)
            curr = curr.next
        return result
```
