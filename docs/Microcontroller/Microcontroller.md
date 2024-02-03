---
title: Arduino Basics
slug: /arduino
---

# Arduino Basics
## LED

- Lange Seite => plus Pol => Pin
- Kurze Seite => minus Pol => GND

## LED auf dem Board

```cpp
const int ledPin = 13;//the led attach to

void setup()
{ 
  pinMode(ledPin,OUTPUT);//initialize the ledPin as an output
} 
```

## Digitale Eingänge
```cpp
  pinMode(ledPin, OUTPUT); // LED als Output
  pinMode(buttonApin, INPUT_PULLUP); // Der Standardwert für den  Pin   ist   HIGH, außer er wurde durch  einen betätigten  Schalter auf „LOW“ geschaltet.
  pinMode(buttonBpin, INPUT_PULLUP);  
```

Da die Taster standardmäßig auf HIGH sind und erst beim klicken auf diese, werden sie auf LOW gestellt. Darauf wartet das IF-Statement und schaltet darauf hin die LED ein oder aus. In diesem Beispiel aus.
```cpp
if (digitalRead(buttonApin) == LOW) 
  {
    digitalWrite(ledPin, LOW);
    Serial.println("Licht aus");
  }
```



