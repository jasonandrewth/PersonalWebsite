---
title: Building a plant controlled AI Twitter Bot
description: Build an AI Twitter Bot that reacts to sensory input from your houseplant
date: "2021-12-20"
published: true
---

<script>
  import ExternalLink from '$lib/components/ExternalLink.svelte'
</script>

## Uses

**Here's some stuff I use**

Last year, GitHub added a new cool feature for the user profile. You can now add a README file to it, and it will show up besides your profile pic. This is great for talking a bit about yourself and what you do, putting some contact info, or simply making a cool first impression. \


Last year, GitHub added a new cool feature for the user profile. You can now add a README file to it, and it will show up besides your profile pic. This is great for talking a bit about yourself and what you do, putting some contact info, or simply making a cool first impression.

Last year, GitHub added a new cool feature for the user profile. You can now add a README file to it, and it will show up besides your profile pic. This is great for talking a bit about yourself and what you do, putting some contact info, or simply making a cool first impression.


<ExternalLink ariaLabel="googlelink" href="https://google.com">Google Link</ExternalLink>


Here some Javascript code:

```js
// JavaScript goes here,
// And will be syntax-highlighted!

const hello = "world"; 
```

Here some C++ code:

```cpp
//#define DHTPIN 3 // By default the module connected to pin D3, it can be changed, define it before the #include of the library
#include "Arduino_SensorKit.h"
#include <ArduinoJson.h>

const int capacity = JSON_OBJECT_SIZE(3);
 
void setup() {
  Serial.begin(9600);
  Environment.begin();
}
 
void loop() {
  
  //Serial.print("Temperature = ");
  //Serial.print(Environment.readTemperature()); //print temperature
  //Serial.println(" C");
  //Serial.print("Humidity = ");
  //Serial.print(Environment.readHumidity()); //print humidity
  //Serial.println(" %");

  DynamicJsonDocument doc(1024);
  JsonArray array = doc.to<JsonArray>();

  JsonObject param1 = array.createNestedObject();
  param1["temp"]     = (int) Environment.readTemperature();
  param1["humidity"]     = (int) Environment.readHumidity();

  // JSON to String (serializion)
  String output;
  serializeJson(doc, output);

  Serial.println(output);

  // Create the JSON document
  //StaticJsonDocument<capacity> doc;
  //doc["temp"] = Environment.readTemperature();
  //doc["humidity"] = Environment.readHumidity();
  //serializeJsonPretty(doc, Serial);

  
  delay(1000);
  
}
}
```