using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;

public class CollisionTracker : MonoBehaviour
{

    public TMP_Text score;
    public int count = 0;

    public GameObject gameScene;
    public GameObject restartScene;

    void Start()
    {
        count = 0;
    }

    void Update()
    {
        
    }

    IEnumerator WaitForSceneLoad()
    {
      yield return new WaitForSeconds(3);
      SceneManager.LoadScene("ResetMenu");

    }

    void OnCollisionEnter(Collision collision)
    {
        count = count + 1;
        score.text = "Score: " + count;

        if (count == 14)
        {
            //SceneManager.LoadScene("ResetMenu");
            StartCoroutine(WaitForSceneLoad());
        }
    }
}
