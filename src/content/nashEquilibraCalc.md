---
title: "Building a Nash equilibrium calculator with Javascript"
date: "2019-09-10"
draft: false
path: "/blog/NashCalculator"
---

#Game Theory

###Keywords

* **_Game :_** A game is a formal description of a strategic situation. 


* **_Player :_** Agent who makes decisions in a game.

* **_Payoff :_** A payoff is a number, also called utility, that reflects the desirability of an outcome to a
           player, for whatever reason. When the outcome is random, payoffs are usually weighted
           with their probabilities. The expected payoff incorporates the player’s attitude towards
           risk.

* **_Rationality :_**  Rationality is **NOT** the same as knowledge, the player is said to be rational if he seeks to play in a manner which maximizes his own benefit -Payoff- 

* **_Strategy :_** It is the plan of choices made by the player. 

* **_Zero-sum-game :_** A game is said to be zero-sum if for any outcome, the sum of the payoffs to all players is
                  zero. In a two-player zero-sum game, one player’s gain is the other player’s loss, so their
                  interests are diametrically opposed. 
                                                 

Game theory is the study of conflict and cooperation between agents and the strategies chosen in order to achieve the maximum utility. . These agents may be 
individuals, groups, firms, or any combination of these. 
Game theory was developed by John von Neumann and Oskar Morgenstern, to solve economic problems.
And then improved by Dr. John Forbes Nash, who demonstrated that finite games will always have and equilibrium, at this point all players choose actions
which are the best for them given their opponents choices.

####The Prisioner's Dilemma : 

###Problem :
 Two members of a gang of bank robbers, Alice and Bob, have been arrested and are being interrogated in separate rooms. The authorities have no other witnesses, and can only prove the case against them if they can convince at least one of the robbers to betray his accomplice and testify to the crime. Each bank robber is faced with the choice to cooperate with his accomplice and remain silent or to defect from the gang and testify for the prosecution. If they both co-operate and remain silent, then the authorities will only be able to convict them on a lesser charge of loitering, which will mean one year in jail each (1 year for Alice + 1 year for Bob = 2 years total jail time). If one testifies and the other does not, then the one who testifies will go free and the other will get three years (0 years for the one who defects + 3 for the one convicted = 3 years total). However if both testify against the other, each will get two years in jail for being partly responsible for the robbery (2 years for Alice + 2 years for Bob = 4 years total jail time).

Alice and Bob are the players, each of them has two possible strategies: Cooperate and Defect, Each strategy combination defines a payoff pair, like (3, 0) for (Defect , Cooperate) or (1, 1) for Cooperation by Alice and Bob, which of course 
is the optimal outcome or the equilibrium point. Nevertheless, in some scenarios parties choose to protect themselves, as result, Alice and Bob will get a non-optimal scenario.
This paradox is widely known in modern game theory, and occurs in certain aspects of the Economy, Politics, Animals, Sports, and many more.       


###Solution :
 Cooperation in this case is the best strategy for Alice and Bob but how to prove it?
 
 Let's take a look to this payoff matrix : 
 
 ![prisioner's Dilemma](https://static-ssl.businessinsider.com/image/5756c8da9105841d008c7255-960/prisoner's-dilemma.png)
 
 Lets build a Nash equilibrium calculator:




Let's design our calculator, bellow we have the algorithm to be used

```Algorithm 1

for all support size profiles x = (x1, x2), sorted in increasing order of, first,
|x1 − x2| and, second, (x1 + x2) do
for all S1 ⊆ A1 s.t. |S1| = x1 do
A′
2 ← {a2 ∈ A2 not conditionally dominated, given S1 }
if ∄a1 ∈ S1 conditionally dominated, given A
′
2
then
for all S2 ⊆ A′
2
s.t. |S2| = x2 do
if ∄a1 ∈ S1 conditionally dominated, given S2 then
if Feasibility Program 1 is satisfiable for S = (S1, S2) then
Return the found NE p
```
[src](https://www2.cs.duke.edu/courses/fall06/cps296.2/simplesearchnashGEB.pdf)  


This said, the actual mechanics of finding equilibrium cells can be done the following way : find the maximum of a column and check if the second member of the pair is the maximum of the row. If these conditions are met, the cell represents a Nash equilibrium. Check all columns this way to find all `NE` cells. An `N×N` matrix may have between `0` and `N×N` pure-strategy Nash equilibrium
~~~~


#STILL IN DEVELOPMENT





#####                                                   [Sources](http://www.cdam.lse.ac.uk/Reports/Files/cdam-2001-09.pdf)

###Next post I will build an iterated prisioner's dilemma game.
