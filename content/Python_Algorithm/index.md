---
emoji: 💡
title: 파이썬 자료구조와 알고리즘
date: '2023-05-26 23:26:00'
author: logkyung
tags: 블로그
categories: 블로그
---

## (1) 정렬된 리스트에 원소 삽입
### 문제 설명
리스트 L과 정수 x가 인자로 주어질 때, 리스트 내의 올바른 위치에 x를 삽입하여 그 결과 리스트를 반환하는 함수 solution을 완성하세요.

- My solution
```
def solution(L, x):
    for element in L:
        if x > element:
            continue
        idx = L.index(element)
        L.insert(idx, x)
        break
    else:
        L.append(x)
    return L
```
<br>
## (2) 리스트에서 원소 찾아내기
### 문제 설명
인자로 주어지는 리스트 L 내에서, 또한 인자로 주어지는 원소 x가 발견되는 모든 인덱스를 구하여 이 인덱스들로 이루어진 리스트를 반환하는 함수 solution을 완성하세요.
힌트 1: 리스트의 index() 메서드와 슬라이싱을 활용하는 것이 한 가지 방법이 됩니다.
힌트 2: 인자로 주어지는 원소가 리스트 내에 존재하지 않을 때의 예외 처리를 "if x in L"과 같은 조건문으로 판단할 수 있습니다.

- My solution
```
def solution(L, x):
    answer = []
    if x not in L:
        answer.append(-1)
    else:
        idx = L.index(x)
        answer.append(idx)
        while True:
            if x not in L[idx+1:]:
                break
            else:
                idx = L[idx+1:].index(x) + len(L[:idx+1])
                answer.append(idx)
    return answer
```
