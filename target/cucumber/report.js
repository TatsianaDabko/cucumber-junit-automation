$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/shoppingSearchSorting.feature");
formatter.feature({
  "name": "Shopping Search Result Sorting",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Ascending price order verification in Search Result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@priceOrder"
    }
  ]
});
formatter.step({
  "name": "user goes to shopping homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user searches for item \"\u003citem\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user verifies a message \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects sort by option \"\u003csortByOption\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies each result is sorted by lowest price first",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "item",
        "result",
        "sortByOption"
      ]
    },
    {
      "cells": [
        "dress",
        "67",
        "Price: Lowest first"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Ascending price order verification in Search Result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@priceOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to shopping homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "ShppingDressTypes_steps.user_goes_to_shopping_homepage()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.ShppingDressTypes_steps\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 32 more\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 77\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027Sayyaras-MBP.home\u0027, ip: \u0027fe80:0:0:0:1401:a6e4:4eec:f58f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: driver.version: Driver\nremote stacktrace: 0   chromedriver                        0x000000010c5f9f09 chromedriver + 3694345\n1   chromedriver                        0x000000010c586fd3 chromedriver + 3223507\n2   chromedriver                        0x000000010c32658f chromedriver + 730511\n3   chromedriver                        0x000000010c28c10b chromedriver + 98571\n4   chromedriver                        0x000000010c28822a chromedriver + 82474\n5   chromedriver                        0x000000010c2b5b71 chromedriver + 269169\n6   chromedriver                        0x000000010c2b2e83 chromedriver + 257667\n7   chromedriver                        0x000000010c28e23d chromedriver + 107069\n8   chromedriver                        0x000000010c28f1d5 chromedriver + 111061\n9   chromedriver                        0x000000010c5b507f chromedriver + 3412095\n10  chromedriver                        0x000000010c5c1ced chromedriver + 3464429\n11  chromedriver                        0x000000010c5c1a78 chromedriver + 3463800\n12  chromedriver                        0x000000010c594959 chromedriver + 3279193\n13  chromedriver                        0x000000010c5c2548 chromedriver + 3466568\n14  chromedriver                        0x000000010c5a91b7 chromedriver + 3363255\n15  chromedriver                        0x000000010c5e0474 chromedriver + 3589236\n16  chromedriver                        0x000000010c5ffce7 chromedriver + 3718375\n17  libsystem_pthread.dylib             0x00007fff777d12eb _pthread_body + 126\n18  libsystem_pthread.dylib             0x00007fff777d4249 _pthread_start + 66\n19  libsystem_pthread.dylib             0x00007fff777d040d thread_start + 13\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:207)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat utilities.Driver.getDriver(Driver.java:24)\n\tat pages.ShoppingHomePage.\u003cinit\u003e(ShoppingHomePage.java:15)\n\tat steps.ShppingDressTypes_steps.\u003cinit\u003e(ShppingDressTypes_steps.java:14)\n\t... 37 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user searches for item \"dress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingSearchSorting_steps.user_searches_for_item(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies a message \"67\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingSearchSorting_steps.user_verifies_a_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects sort by option \"Price: Lowest first\"",
  "keyword": "And "
});
formatter.match({
  "location": "ShoppingSearchSorting_steps.user_selects_sort_by_option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies each result is sorted by lowest price first",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingSearchSorting_steps.user_verifies_each_result_is_sorted_by_lowest_price_first()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 77\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027Sayyaras-MBP.home\u0027, ip: \u0027fe80:0:0:0:1401:a6e4:4eec:f58f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: driver.version: Driver\nremote stacktrace: 0   chromedriver                        0x000000010214af09 chromedriver + 3694345\n1   chromedriver                        0x00000001020d7fd3 chromedriver + 3223507\n2   chromedriver                        0x0000000101e7758f chromedriver + 730511\n3   chromedriver                        0x0000000101ddd10b chromedriver + 98571\n4   chromedriver                        0x0000000101dd922a chromedriver + 82474\n5   chromedriver                        0x0000000101e06b71 chromedriver + 269169\n6   chromedriver                        0x0000000101e03e83 chromedriver + 257667\n7   chromedriver                        0x0000000101ddf23d chromedriver + 107069\n8   chromedriver                        0x0000000101de01d5 chromedriver + 111061\n9   chromedriver                        0x000000010210607f chromedriver + 3412095\n10  chromedriver                        0x0000000102112ced chromedriver + 3464429\n11  chromedriver                        0x0000000102112a78 chromedriver + 3463800\n12  chromedriver                        0x00000001020e5959 chromedriver + 3279193\n13  chromedriver                        0x0000000102113548 chromedriver + 3466568\n14  chromedriver                        0x00000001020fa1b7 chromedriver + 3363255\n15  chromedriver                        0x0000000102131474 chromedriver + 3589236\n16  chromedriver                        0x0000000102150ce7 chromedriver + 3718375\n17  libsystem_pthread.dylib             0x00007fff777d12eb _pthread_body + 126\n18  libsystem_pthread.dylib             0x00007fff777d4249 _pthread_start + 66\n19  libsystem_pthread.dylib             0x00007fff777d040d thread_start + 13\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:207)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat utilities.Driver.getDriver(Driver.java:24)\n\tat steps.Hooks.tearDown(Hooks.java:23)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.TestCase.run(TestCase.java:53)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
});