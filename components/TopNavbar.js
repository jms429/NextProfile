import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  FadeContainer,
  hamFastFadeContainer,
  mobileNavItemSideways,
  popUp,
} from "../content/FramerMotionVariants";
import { useDarkMode } from "../context/darkModeContext";
import { navigationRoutes } from "../utils/utils";
import { FiMoon, FiSun } from "react-icons/fi";