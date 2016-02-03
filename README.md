# This are some basic notes to a multiplayer game project

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

Also, [Here's a nice resource for Hex grids](http://www.redblobgames.com/grids/hexagons/)

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




# Stuff decided

## Matches
The game will happen in self-contained matches (there's no continuity between one match and the next one). The game will make an effort to ensure both players have equal chances of winning. 

### Objective
A player wins when their opponent's `king` dies, the king dies when its `hp` reaches zero. A `king` could be affected
by friendly buffs (maybe?)



## Match phases

### Planning Phase
Moment in which a player is deciding what their heroes will do in the next `execution phase`.
`Planning Phase` is timed and fast-paced as it is the time where most of the match is spent. `Planning phase` allows the user to control all heroes which are in a `Ready State`.

### Execution Phase
The execution system represents the moment in which decisions taken in `Planning Phase` are executed, these happen in `Ticks`
which are discrete units of time in which actions occur. Two actions in the same tick will happen at the same time.

### Rest Phase
This phase happens right after the `Execution Phase` is finished, and it is here where `Rest Time` is substracted from
`Units`. After a `Rest Phase`, the all `Units` will have a `Rest Time` defined by the following logic in pseudo-code:

```
unitRestTime = unitRestTime - MinimumUnitRestTime
```

The `Rest Phase` could be decided to be an actual *visible* face or an internal phase which happens without the user knowing (giving the effect of the `Execution Phase` going right back to `Planning Phase` without delay)



# Glossary
**Ready State**: When a `Unit` has its `Rest Time` in zero. The moment in which one or more heroes enter `Ready State`
the match changes to `Planning Phase`.

**Rest Time**: Integer value representing the how long a hero must wait to be in `Ready State`. In practice, `Rest Time` determine which `Units` will be enabled in the next `Planning Phase` and in which order. The bigger the `Rest Time` the later a unit will be able to enter `Planning Phase`

**Unit**: Entity which is controlled by or belongs to a player: `Kings` or `Heroes`

**Tick**: A tick is an absolute unit of time used to in `Execution Phase`. Each `Tick` runs the first `Action Fragment` from the `Action Queue` of each unit who enqueued an action at `Planning Phase`

**Action**: What a `Unit` will do in `Execution Phase`. An `Action` is used to generate `Action Queues`

**Action Fragment (Need a better name)**: A task to be executed in a tick. It represents things like `Move x+1` and `Projectile move y-1`

**Action Queue**: List of `Action Fragments` to be performed in order per tick. A `Tick` can actually push new `Action Fragments` into an `Action Queue` (Unconfirmed)


NOTE: `Action Fragment` and `Action Queue` must be revised, they are yet not well thought for all cases
