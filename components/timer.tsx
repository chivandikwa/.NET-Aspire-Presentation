import styled from "@emotion/styled";
import { useMachine } from "@xstate/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { assign, createMachine } from "xstate";
import useKeyPress from "../hooks/key";
import { useDeck } from "mdx-deck";
import { LinearProgress } from "@material-ui/core";

interface TimerMachineContext {
  duration: number;
  elapsed: number;
  interval: number;
}

type TimerEvents = { type: "TOGGLE" } | { type: "TICK" };

const timerMachine = createMachine<TimerMachineContext, TimerEvents>(
  {
    id: "timerMachine",
    initial: "idle",
    context: {
      duration: 3600,
      elapsed: 0,
      interval: 0.1,
    },
    states: {
      idle: {
        entry: "resetTimer",
        on: {
          TOGGLE: {
            target: "running",
          },
        },
      },
      running: {
        always: {
          target: "expired",
          cond: "timerExpired",
        },
        on: {
          TICK: {
            actions: "tick",
          },
          TOGGLE: {
            target: "paused",
          },
        },
      },
      paused: {
        on: {
          TOGGLE: { target: "running" },
        },
      },
      expired: {
        always: {
          target: "idle",
        },
      },
    },
  },
  {
    actions: {
      tick: assign<TimerMachineContext, Pick<TimerEvents, "type">>({
        elapsed: ctx => ctx.elapsed + ctx.interval,
      }),
      resetTimer: assign({
        duration: 3600,
        elapsed: 0,
        interval: 0.1,
      }),
    },
    guards: {
      timerExpired: (ctx: TimerMachineContext) => ctx.elapsed >= ctx.duration,
    },
  }
);

const Clock = styled(motion.div)`
  /*  */
`;

const renderTime = (duration: number) => {
  // const seconds = duration.toFixed(2);
  const minutes = Math.floor(duration / 60);
  return `00:${minutes.toFixed()}`;
};

const Timer = () => {
  const [state, send] = useMachine(timerMachine);
  const enterKey = useKeyPress("Enter");
  const { index, length } = useDeck();

  const { duration, elapsed, interval } = state.context;

  const buffer = ((elapsed + 1) / duration) * 100;
  const value = ((index + 1) / length) * 100;

  useEffect(() => {
    if (state.value === "running") {
      const timerId = setInterval(() => {
        send("TICK");
      }, 1000 * interval);
      return () => {
        clearInterval(timerId);
      };
    }
  }, [interval, send, state.value]);

  useEffect(() => {
    enterKey && send("TOGGLE");
  }, [enterKey]);

  return (
    <Clock
      animate={{ scale: state.value === "paused" ? 1.1 : 1 }}
      style={{ backgroundColor: "white", width: "12rem", marginBottom: "1rem" }}
      transition={{
        duration: 0.5,
        flip: state.value === "paused" ? Infinity : 0,
      }}
    >
      <LinearProgress style={{ height: "1rem", width: "16rem" }} color={"primary"} value={value} variant={"buffer"} />
    </Clock>
  );
};

export default Timer;
