using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;


public class MenuFade : MonoBehaviour
{

    public void Fade()
    {
    StartCoroutine(DoFade());
    }

    IEnumerator WaitForSceneLoad()
    {
        yield return new WaitForSeconds(3);
        SceneManager.LoadScene("ResetMenu");

    }
    IEnumerator DoFade()
    {
        CanvasGroup canvGroup = GetComponent<CanvasGroup>();
        while (canvGroup.alpha > 0)
        {
            canvGroup.alpha -= Time.deltaTime / 2;
            yield return null;

        }

        if (canvGroup.alpha == 0)
        {
            SceneManager.LoadScene("Game");
            StartCoroutine(WaitForSceneLoad());

        }
    }
}
