import { test as setup, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

setup.setTimeout(60000); 
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page, context }) => {
    // Perform authentication steps. Replace these actions with your own.
    await page.goto('https://app.composio.dev');

    // Step 2: Click on "Continue with Github" and wait for the new page
    await page.click('text="Continue with Github"'); // Adjust selector based on actual button text

    // Fill in the login credentials
    await page.fill('input[name="login"]', process.env.USER_LOGIN || '');
    await page.fill('input[name="password"]', process.env.USER_PASS || '');

    // Submit the login form
    await page.locator('input[type="submit"]').click();
    await page.waitForURL('https://app.composio.dev/apps?category=all');

    // Click on "Tools catalogue"
    await page.locator('//span[normalize-space()="Tools catalogue"]').click();
    
    // Click on "Github"
    await page.click('text="Github"');
    
    // Set up GitHub integration
    const setupGithubIntegrationButton = await page.locator('text=Setup Github integration');
    await setupGithubIntegrationButton.waitFor({ state: 'attached', timeout: 7000 });
    await expect(setupGithubIntegrationButton).toBeVisible({ timeout: 10000 });
    await setupGithubIntegrationButton.click();
    
    // Save the integration
    await page.click('text="Save"');
    await page.waitForTimeout(7000);

    // Handle the new page when clicking "Connect to Github"
    const pagePromise = context.waitForEvent('page');
    await page.locator('text="Try actions"').click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();

    await page.waitForLoadState('networkidle');

    //const runButtons = page.locator('button:has-text("Run")');
    const runButtons = page.locator('button:has-text("Run")');

    await runButtons.first().click();

     // Wait for the "Run action" button to appear
     const runActionButton = page.locator('button:has-text("Run action")');
     await runActionButton.waitFor({ state: 'visible', timeout: 5000 });
     
     // Click the "Run action" button
     await runActionButton.click();
 

    
});
