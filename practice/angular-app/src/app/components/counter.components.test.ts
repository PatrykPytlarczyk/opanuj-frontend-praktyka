// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import {render, screen, fireEvent} from '@testing-library/angular'
import {CounterComponent} from './counter.component'
import { test, expect,describe,afterEach,beforeEach } from 'vitest';

import 'zone.js'; // Angular wymaga Zone.js dla działania testów
import 'zone.js/testing'; // Angular wymaga specjalnej wersji Zone.js do testów
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

beforeEach(() => {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  )
})

afterEach(() => {
  TestBed.resetTestEnvironment()
})


describe('Counter', () => {
  test('should render counter', async () => {
    await render(CounterComponent, {
      componentProperties: {counter: 5},
    })

    expect(screen.getByText('Current Count: 5')).toBeInTheDocument()
  })

  test('should increment the counter on click', async () => {
    await render(CounterComponent, {
      componentProperties: {counter: 5},
    })

    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('-'))

    expect(screen.getByText('Current Count: 6')).toBeInTheDocument()
  })
})
