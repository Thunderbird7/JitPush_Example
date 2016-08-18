/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"

#import "JitPush.h"

@interface AppDelegate () <JitPushDelegate>
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  /*
    NSURL *jsCodeLocation;
    
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"JitPush_Example"
                                                 initialProperties:nil
                                                     launchOptions:launchOptions];
    rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
    
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    UIViewController *rootViewController = [UIViewController new];
    rootViewController.view = rootView;
    self.window.rootViewController = rootViewController;
   */
  
  
  //TODO: YOU NEED RUN 'npm run-script build:ios' FIRST BEFORE TO BUILD THIS PROJECT!
  
  // Your stored json payload URL for check update version...
  NSURL *remotePayloadURL = [NSURL URLWithString:@"https://www.dropbox.com/s/8jtonwugyz7bg1t/update.json?raw=1"];
  
  // Your default jsbundle in apps
  NSURL *defaultBundleURL = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
  
  // Your default payload in apps
  NSURL *defaultPayloadURL = [[NSBundle mainBundle] URLForResource:@"payload" withExtension:@"json"];
  
  // Get instance
  JitPush *jitPush = [JitPush sharedManager];
  [jitPush setDelegate:self];
  [jitPush initWithUpdatePayloadURL:remotePayloadURL defaultBundle:defaultBundleURL defaultPayload:defaultPayloadURL];
  
  // Server host name
  [jitPush setHostName:@"https://www.dropbox.com"];
  [jitPush downloadUpdateWithType:JitPushMinorUpdate];
  [jitPush checkUpdate];
  
  // Get latest bundle URL
  NSURL *latestBundleURL = [jitPush lastestBundleURL];
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  self.window.rootViewController = rootViewController;
  [self createReactRootViewFromURL:latestBundleURL];
  
  [self.window makeKeyAndVisible];
  return YES;
  
}

- (void)createReactRootViewFromURL:(NSURL*)url
{
  dispatch_async(dispatch_get_main_queue(), ^{
    RCTBridge* bridge = [[RCTBridge alloc] initWithBundleURL:url moduleProvider:nil launchOptions:nil];
    RCTRootView* rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"JitPush_Example" initialProperties:nil];
    self.window.rootViewController.view = rootView;
  });
}

#pragma mark - JitPush Delegate

- (void)JitPushDidUpdateBundleWithURL:(NSURL *)url
{
  NSLog(@"delegate work! %@", url);
  
  UIAlertController *alertController = [UIAlertController
                                        alertControllerWithTitle:NSLocalizedString(@"Update Downloaded", nil)
                                        message:NSLocalizedString(@"An update was downloaded. Do you want to apply the update now?", nil)
                                        preferredStyle:UIAlertControllerStyleAlert];
  
  UIAlertAction *cancelAction = [UIAlertAction
                                 actionWithTitle:NSLocalizedString(@"Cancel", @"Cancel action")
                                 style:UIAlertActionStyleCancel
                                 handler:^(UIAlertAction *action)
                                 {
                                   NSLog(@"Cancel action");
                                 }];
  
  UIAlertAction *okAction = [UIAlertAction
                             actionWithTitle:NSLocalizedString(@"OK", @"OK action")
                             style:UIAlertActionStyleDefault
                             handler:^(UIAlertAction *action)
                             {
                               [self createReactRootViewFromURL: url];
                             }];
  
  [alertController addAction:cancelAction];
  [alertController addAction:okAction];
  
  // make sure this runs on main thread. Apple doesn't like if you change UI from background thread.
  dispatch_async(dispatch_get_main_queue(), ^{
    [self.window.rootViewController presentViewController:alertController animated:YES completion:nil];
  });
}

@end
