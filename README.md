# Preliminary notes

## Must haves

**Simultaneous turns**
Players begin the game at the same time, and might execute actions in a same game `tick`

**Self contained matches**
No mechanics outside matches can give an advantage to players inside a match, players are always in the same conditions
when they begin. (No level, or talent tree outside matches)

**Non pay-to-win items can be purchased**
Non pay-to-win items will be the only kind of items available for purchase

**Time waste for actions**
Actions done by a hero have a `rest period` measured in `time units` that leaves the hero completely unusable

**High skill-cap (not in execution, but in strategy)**
I want this to be a game which is easy to learn but hard to master. A competitive game, where players can become really 
good at.

Ways to accomplish this:
- Force players to anticipate their opponent's movement
- Some form of upgrade system where players can build strengths and compensate weaknesses in-match


## Probably should have

**Grid system**
Makes game actions discrete and easy to understand. If I decide not to go with a grid system then the usual more granular 
kind of movement unit would take its place.

For the `Grid System` I would only consider the following options:
- Square grid
- Hexagonal grid

Grid system would implicate some sort of skewed top-down perspective like this:

![Hexagonal skewed perspective](http://i.stack.imgur.com/fplfg.jpg)

I wouldn't add height to the map though, it would overcomplicate gameplay. One good thing about the **Hexagonal** approach
is that shooting projectiles would be less shitty (6 directions vs 4). On the other hand, coding an hexagonal grid system can
become quite complicated.

**Replayable matches**
Simultaneous turns and a high skill-cap can allow for impressive things to happen. Having the ability to replay and share 
these events could be extremely beneficial for the game's success

## Misc Ideas
**Movement cancel**
If two players walk to the same tile in the same `tick` their movement path is interrupted, staying in the tile they were 
before the movement cancel occured

**Counter**
Could be a skill or a default game action. If a player counters in the sime tick a player attacks, the attacker receives 
a damage penalty, (not sure if attack should be canceled, damage-reduced or allowed)


## Problems
<Fill here reasons why some idea might not work or cause problems>




# Concrete (Stuff decided)

## Planning Phase
Moment in which a player is deciding what their heroes will do in execution phase.
Planning phase is timed and fast. Planning phase will allow the user to control al heroes which are in a `Ready State`

## Execution Phase
The execution system represents the moment in which decisions taken in `Planning Phase` are executed, these happen in `ticks`
which are discrete units of time in which actions occur. Two actions in the same tick will run at the same time