!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";var MQ=MathQuill.getInterface(2),answer=MQ.MathField($("#math_field")[0],{handlers:{upOutOf:function(dir,mathField){console.log(answer.latex())},moveOutOf:function(dir,mathField){console.log(answer.latex())},enter:function(){console.log(answer.latex())}}})},{}]},{},[1]);